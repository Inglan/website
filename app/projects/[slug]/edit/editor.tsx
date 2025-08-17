"use client";

import Content from "@/components/content";
import { Preloaded, useMutation, usePreloadedQuery } from "convex/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { toast } from "sonner";
export default function ProjectEditor(props: {
  preloadedProjectData: Preloaded<typeof api.projects.get>;
}) {
  const projectData = usePreloadedQuery(props.preloadedProjectData);
  const save = useMutation(api.projects.update);

  const [name, setName] = useState(projectData.name);
  const [description, setDescription] = useState(projectData.description);
  const [content, setContent] = useState(projectData.content);

  const [inputtedTag, setInputtedTag] = useState("");
  const [inputtedLinkTitle, setInputtedLinkTitle] = useState("");
  const [inputtedLinkUrl, setInputtedLinkUrl] = useState("");

  const [tags, setTags] = useState<string[]>(projectData.tags || []);
  const [links, setLinks] = useState<{ title: string; url: string }[]>(
    projectData.links || [],
  );

  return (
    <Content>
      <h1>Edit Project</h1>
      <div className="grid gap-2">
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="description">Description:</Label>
        <Input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Label htmlFor="content">Content:</Label>
        <Textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Label>Tags:</Label>
        <div className="flex flex-row gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <Badge
              variant="outline"
              key={index}
              onClick={() => {
                setTags(tags.filter((_, i) => i !== index));
              }}
            >
              {tag}
            </Badge>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Badge>Add</Badge>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Tag</DialogTitle>
              </DialogHeader>
              <Input
                type="text"
                id="tag"
                name="tag"
                value={inputtedTag}
                onChange={(e) => setInputtedTag(e.target.value)}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    onClick={() => {
                      setTags([...tags, inputtedTag]);
                      setInputtedTag("");
                    }}
                  >
                    Add
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Label>Links</Label>
        <div className="flex flex-row gap-2 flex-wrap">
          {links.map((link, index) => (
            <Badge
              variant="outline"
              key={index}
              onClick={() => {
                setLinks(links.filter((_, i) => i !== index));
              }}
            >
              {link.title} - {link.url}
            </Badge>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Badge>Add</Badge>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Link</DialogTitle>
              </DialogHeader>
              <Label htmlFor="url">URL</Label>
              <Input
                type="text"
                id="url"
                name="url"
                value={inputtedLinkUrl}
                onChange={(e) => setInputtedLinkUrl(e.target.value)}
              />
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={inputtedLinkTitle}
                onChange={(e) => setInputtedLinkTitle(e.target.value)}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    onClick={() => {
                      setLinks([
                        ...links,
                        { url: inputtedLinkUrl, title: inputtedLinkTitle },
                      ]);
                      setInputtedLinkTitle("");
                      setInputtedLinkUrl("");
                    }}
                  >
                    Add
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Button
          onClick={() => {
            toast.promise(
              save({
                id: projectData._id,
                name,
                description,
                content,
                tags,
                links,
              }),
              {
                loading: "Saving...",
                success: "Project saved!",
                error: "Failed to save project",
              },
            );
          }}
        >
          Save
        </Button>
      </div>
    </Content>
  );
}

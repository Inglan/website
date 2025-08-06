import Content from "@/components/content";

export default function MdxLayout() {
  // Create any shared layout or styles here
  return (
    <Content>
      <h1>Contact me</h1>
      <a
        href="mailto:me@ingo.au"
        className="text-4xl hover:underline flex flex-row gap-2 items-center"
      >
        {/*<IconMail className="size-10" />*/}
        me@ingo.au
      </a>
      <a
        href="https://signal.me/#eu/aON_wvkns7bfeU-UAj_09B1Yym8WVC2QIWWV8rIhYZzPc2xGLUtBeLWMc9LJoWNB"
        target="_blank"
        className="text-4xl hover:underline flex flex-row gap-2 items-center"
      >
        {/*<IconSignal className="size-10" />*/}
        ingo.392
      </a>
      {/*<h2 class="text-4xl">Contact form</h2>
	<form class="flex rounded gap-3 flex-col max-w-full" method="POST" use:enhance>
		<div class="flex flex-row gap-3">
			<div class="flex w-full flex-col gap-1.5">
				<Label for="name-{id}">Name</Label>
				<Input required type="text" id="name-{id}" />
			</div>
			<div class="flex w-full flex-col gap-1.5">
				<Label for="email-{id}">Email</Label>
				<Input required type="email" id="email-{id}" />
			</div>
		</div>

		<div class="flex w-full flex-col gap-1.5">
			<Label for="message">Message</Label>
			<Textarea required class="resize-none h-72" id="message" />
		</div>

		<Button type="submit" class="ml-auto">Send</Button>
	</form>*/}
    </Content>
  );
}

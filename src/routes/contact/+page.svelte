<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	import IconMail from '~icons/material-symbols/mail-rounded';
	import IconSignal from '~icons/fa6-brands/signal-messenger';

	const id = $props.id();
</script>

<div class="container mx-auto p-3 flex flex-col gap-3">
	<h1 class="text-6xl">Contact me</h1>
	<div class="flex md:flex-row gap-3 w-full flex-col">
		<form class="flex w-full border rounded gap-3 flex-col p-3">
			<div class="flex flex-row gap-3">
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="name-{id}">Name</Label>
					<Input type="text" id="name-{id}" />
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="email-{id}">Email</Label>
					<Input type="email" id="email-{id}" />
				</div>
			</div>

			<div class="flex w-full flex-col gap-1.5">
				<Label for="message">Your message</Label>
				<Textarea class="resize-none h-72" placeholder="Type your message here." id="message" />
			</div>

			<Button type="submit" class="ml-auto">Send</Button>
		</form>
		<div class="flex flex-col gap-3 w-full">
			<div class="flex p-10 justify-center h-full border border-dashed rounded flex-col gap-3">
				<a
					href="mailto:me@ingo.au"
					class="text-4xl hover:underline flex flex-row gap-2 items-center"
				>
					<IconMail class="size-10" />
					me@ingo.au
				</a>
				<a
					href="https://signal.me/#eu/aON_wvkns7bfeU-UAj_09B1Yym8WVC2QIWWV8rIhYZzPc2xGLUtBeLWMc9LJoWNB"
					target="_blank"
					class="text-4xl hover:underline flex flex-row gap-2 items-center"
				>
					<IconSignal class="size-10" />
					ingo.392</a
				>
			</div>
		</div>
	</div>
</div>

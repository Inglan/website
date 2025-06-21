<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	import IconMail from '~icons/material-symbols/mail-rounded';
	import IconSignal from '~icons/fa6-brands/signal-messenger';
	import { enhance } from '$app/forms';

	const id = $props.id();
</script>

<div class="container mx-auto p-5 flex flex-col gap-5">
	<h1 class="text-6xl">Contact me</h1>
	<div class="flex h-full rounded flex-col gap-3">
		<a href="mailto:me@ingo.au" class="text-4xl hover:underline flex flex-row gap-2 items-center">
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
	<!-- <h2 class="text-4xl">Contact form</h2> -->
	<!-- <form class="flex rounded gap-3 flex-col max-w-full" method="POST" use:enhance>
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
	</form> -->
</div>

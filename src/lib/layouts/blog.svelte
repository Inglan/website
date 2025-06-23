<script lang="ts">
	let { children, title, image, posted, updated } = $props();

	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	import { Button } from '$lib/components/ui/button/index.js';

	import IconCalendar from '~icons/material-symbols/calendar-month-rounded';
	import IconEdit from '~icons/material-symbols/edit-rounded';
	import IconChevronLeft from '~icons/material-symbols/chevron-left-rounded';
</script>

<div class="flex min-h-96 relative p-5 flex-col">
	<img
		src={image}
		class="object-cover w-full h-full absolute top-0 left-0 -z-20 opacity-50 md:opacity-100"
		alt=""
	/>
	<div class="mx-auto w-full max-w-prose prose-lg md:prose-xl md:px-3">
		<Button variant="outline" class="bg-background/75 backdrop-blur-xl" href="/blog"
			><IconChevronLeft />Back</Button
		>
	</div>
	<div class="grow"></div>
	<div
		class="flex flex-col md:flex-row gap-3 w-full h-fit justify-end md:items-end max-w-prose prose-lg md:prose-xl mx-auto mt-10 md:p-3"
	>
		<div
			class="absolute top-0 left-0 w-full h-full from-transparent to-background bg-gradient-to-b -z-10"
		></div>
		<h1 class="!m-0">{title}</h1>
		<div class="grow"></div>
		<div class="flex flex-col p-3 border border-dashed rounded-xl h-fit text-nowrap">
			<div class="flex flex-row gap-1 items-center">
				<IconCalendar class="size-6" />
				{dayjs.unix(posted).format('DD/MM/YY')}
			</div>
			{dayjs.unix(posted).fromNow()}
		</div>
		{#if updated}
			<div class="flex flex-col p-3 border border-dashed rounded-xl h-fit text-nowrap">
				<div class="flex flex-row gap-1 items-center">
					<IconEdit class="size-6" />
					{dayjs.unix(updated).format('DD/MM/YY')}
				</div>

				{dayjs.unix(updated).fromNow()}
			</div>
		{/if}
	</div>
</div>
<div class="prose prose-lg md:prose-xl prose-invert mx-auto p-3">
	{@render children()}
</div>

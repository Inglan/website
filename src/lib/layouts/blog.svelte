<script lang="ts">
	let { children, title, image, posted, updated } = $props();

	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	import IconCalendar from '~icons/material-symbols/calendar-month-rounded';
	import IconEdit from '~icons/material-symbols/edit-rounded';
</script>

<div class="prose prose-lg md:prose-xl prose-invert mx-auto p-3">
	<div class="flex flex-col">
		<img src={image} class="w-full h-96 object-cover rounded-xl" alt="" />
		<div class="flex flex-row gap-3">
			<h1>{title}</h1>
			<div class="grow"></div>
			<div class="flex flex-col p-3 bg-muted rounded-xl h-fit">
				<div class="flex flex-row gap-1 items-center">
					<IconCalendar class="size-6" />
					{dayjs.unix(posted).format('D MMM YYYY')}
				</div>
				{dayjs.unix(posted).fromNow()}
			</div>
			{#if updated}
				<div class="flex flex-col p-3 bg-muted rounded-xl h-fit">
					<div class="flex flex-row gap-1 items-center">
						<IconEdit class="size-6" />
						{dayjs.unix(updated).format('D MMM YYYY')}
					</div>

					{dayjs.unix(updated).fromNow()}
				</div>
			{/if}
		</div>
	</div>
	{@render children()}
</div>

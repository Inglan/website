<script lang="ts">
	let { children, title, image, posted, updated } = $props();

	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	import IconCalendar from '~icons/material-symbols/calendar-month-rounded';
	import IconEdit from '~icons/material-symbols/edit-rounded';
</script>

<div class="prose prose-lg md:prose-xl prose-invert mx-auto p-3">
	<div class="flex min-h-96 pt-20 items-end relative p-5">
		<img
			src={image}
			class="object-cover w-full h-full absolute top-0 left-0 -z-20 !m-0 rounded-t-xl"
			alt=""
		/>
		<div class="flex flex-col md:flex-row gap-3 w-full h-fit justify-end md:items-end">
			<div
				class="absolute top-0 left-0 w-full h-full from-transparent to-background bg-gradient-to-b -z-10"
			></div>
			<h1 class="!m-0">{title}</h1>
			<div class="grow"></div>
			<div class="flex flex-col p-3 bg-muted rounded-xl h-fit text-nowrap">
				<div class="flex flex-row gap-1 items-center">
					<IconCalendar class="size-6" />
					{dayjs.unix(posted).format('D MMM YYYY')}
				</div>
				{dayjs.unix(posted).fromNow()}
			</div>
			{#if updated}
				<div class="flex flex-col p-3 bg-muted rounded-xl h-fit text-nowrap">
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

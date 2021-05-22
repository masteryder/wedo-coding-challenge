<script lang="ts">
  import Tailwind from "./components/0-quarks/Tailwind.svelte";
	import {frequencyConfig} from "./__config/frequency.config"
	import Input from "./components/1-atoms/Input.svelte";
	import type { iFrequency } from "./__models/iFrequency";
	import { calculateSavings, simpleCalculateCost } from "./__libs/calc";
	import { fade, fly } from 'svelte/transition';

	export let nbParticipants: number = 1;
	export let averageSalary: number = 50000;
	export let meetingDuration: number = 1;
	export let frequency: number = 12;

	enum Modes {
		SIMPLE,
		PRO
	}
	export let mode: Modes = Modes.SIMPLE;

	$: total = simpleCalculateCost(nbParticipants, averageSalary, meetingDuration, frequency);
	$: savings = calculateSavings(total);

	let availableFrequencies: iFrequency[] = [
		{
			label: 'Yearly',
			repetitions: frequencyConfig.yearly
		},
		{
			label: 'Monthly',
			repetitions: frequencyConfig.monthly
		},
		{
			label: 'Weekly',
			repetitions: frequencyConfig.weekly
		},
		{
			label: 'Daily',
			repetitions: frequencyConfig.daily
		}
	];

</script>

<Tailwind />
<h1 class="text-blue-600 text-center mt-2 mb-1 xl:text-7xl lg:text-5xl md:text-3xl text-2xl">How much you're spending on a meeting</h1>
<main>
	<h2 class="text-gray-500 text-center text-lg mb-4">
		And how much 💰 you could be saving!
	</h2>

	<div class="flex justify-center mb-6">
		<label class="block mr-2">
			<input type="radio" bind:group={mode} value={Modes.SIMPLE}>
			Basic calculator
		</label>
		<label>
			<input type="radio" bind:group={mode} value={Modes.PRO}>
			PRO calculator
		</label>
	</div>


	{#if mode == Modes.SIMPLE}
		<div out:fade="{{ duration: 300}}" in:fly={{x:200, duration: 300, delay: 300}}>
			<p class="mb-3 font-bold">What does your meeting look like?</p>
			<Input
				name="average-salary"
				label="Average annual salary of participants"
				type="text"
				icon='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>'
				id="data-average-salary"
				placeholder="0.00"
				unit="CHF"
				bind:value={averageSalary}
			/>

			<Input
				name="number-participants"
				label="Number of participants"
				type="text"
				icon='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>'
				id="data-number-participants"
				bind:value={nbParticipants}
				placeholder="0"
			/>

			<Input
				name="meeting-duration"
				label="Duration of meeting"
				type="text"
				icon='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>'
				id="data-meeting-duration"
				unit="Hour(s)"
				bind:value={meetingDuration}
				placeholder="0"
			/>

			<div class="text-sm">Frequency</div>
			<div class="mb-2">
				{#each availableFrequencies as f}
					<label class="block">
						<input type="radio" bind:group={frequency} value={f.repetitions}>
						{f.label}
					</label>
				{/each}
			</div>
			{#if !isNaN(total) && Math.floor(savings) > 0}
				<div>
					<p class="text-center">😅 You are currently spending <b class="text-red-600">{total.toFixed(2)} CHF</b> on this meeting in a year</p>
					<p class="text-center text-2xl">👌 You could be saving <b class="text-green-600">{savings.toFixed(2)} CHF</b> just by using <a href="https://wedo.swiss"><img class="inline w-20" src="assets/images/logo-wedo.png" alt="Wedo"/></a></p>
				</div>
			{/if}
		</div>
	{:else if mode == Modes.PRO}
			<div out:fade="{{ duration: 300}}" in:fly={{x:200, duration: 300, delay: 300}}>
				Coming soon<sup>TM</sup>
			</div>
	{/if}

</main>

<style>
	main {
		padding: 1em;
		max-width: 800px;
		margin: 0 auto;
	}

</style>
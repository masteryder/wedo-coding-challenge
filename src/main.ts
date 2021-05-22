import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		nbParticipants: 5,
		averageSalary: 100000,
		meetingDuration: 1.5,
		frequency: 12
	}
});

export default app;
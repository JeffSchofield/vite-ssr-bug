import { createSSRApp, defineComponent, h } from 'vue'
import SomeLib from './some-lib'

export function createApp() {
	const app = createSSRApp(defineComponent({ render: () => h('div', 'Hello World') }))

	app.use(SomeLib)

	return { app }
}
import ObserveVisibility from './directives/observe-visibility'
import { version } from '../package.json'

const install = (app) => {
	app.use({
		// eslint-disable-next-line no-shadow
		install (app) {
			app.directive('observe-visibility', ObserveVisibility)
		},
	})
}

// Plugin
const plugin = {
	version,
	install,
}

export {
	ObserveVisibility,
	install,
}

export default plugin

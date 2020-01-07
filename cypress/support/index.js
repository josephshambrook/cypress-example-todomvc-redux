import '@cypress/code-coverage/support';
import './commands';
import { havePlaceholder, haveTestId } from './customAssertions';

havePlaceholder(chai);
haveTestId(chai);

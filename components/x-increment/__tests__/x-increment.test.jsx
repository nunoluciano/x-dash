const { h } = require('@financial-times/x-engine');
const { mount } = require('@financial-times/x-test-utils/enzyme');

const { Increment } = require('../');

describe('x-increment', () => {
	it('should increment when clicked', async () => {
		const subject = mount(<Increment count={1} />);
		await subject.find('button').prop('onClick')();

		expect(subject.find('span').text()).toEqual('2');
	});

	it('should increment when clicked, waiting for timeout', async () => {
		const subject = mount(<Increment count={1} timeout={1000} />);
		const start = Date.now();

		await subject.find('button').prop('onClick')();

		expect(Date.now() - start).toBeCloseTo(1000, -2); // negative precision ⇒ left of decimal point
		expect(subject.find('span').text()).toEqual('2');
	});
});
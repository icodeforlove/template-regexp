import r from '../dist/index';

describe('General', () => {
	it('can use basic regep', () => {
		expect(r`foobar`.g.i.toString()).toBe(/foobar/gi.toString());
		expect(r`foobar`.g.i._.toString()).toBe(/foobar/.toString());
		expect(r`foo${'(bar)'}`.g.i.toString()).toBe(/foo\(bar\)/gi.toString());
		expect(r`foo${'(bar)'}`.toString()).toBe(/foo\(bar\)/.toString());
		expect(!!'foobar'.match(r`foo(${'bar'})`)).toBe(true);
		expect(!!'foobar'.match(r`foo${'(bar)'}`)).toBe(false);
	});
});
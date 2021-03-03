import { GoPlayground } from "@syumai/goplayground-node"

(async () => {
	
	const src = `package main
	func main() {}`
	
	const gp = new GoPlayground();
	
	// format src
	await gp.format(src);
	// run src
	await gp.compile(src);
	// publish src
	await gp.share(src);
})();


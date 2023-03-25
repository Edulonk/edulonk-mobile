import {edulink} from "../pages/Login";
import storage from "../storage/storage";

export async function getHomework() {
	let currentHomework = await edulink.getCurrentHomework();
	await storage.save({
		key: 'currentHomework',
		data: currentHomework
	});

	let pastHomework = await edulink.getPastHomework();
	await storage.save({
		key: 'pastHomework',
		data: pastHomework
	})
}
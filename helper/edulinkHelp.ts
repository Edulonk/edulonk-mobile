import {Edulink} from "edulinkone-api";

export let edulink: Edulink;

export async function createEdulink(username: string, password: string, schoolId: string) {
	edulink = new Edulink(schoolId, username, password, 2);
}
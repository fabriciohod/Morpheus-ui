import type { RequestHandler } from "@sveltejs/kit";
import fs from 'fs';
import path from 'path';

export const GET: RequestHandler = async () => {
    const jsonPath = path.resolve('static/default/weapons.json');

    try {
        const data = fs.readFileSync(jsonPath, 'utf-8');
        return new Response(data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'File not found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
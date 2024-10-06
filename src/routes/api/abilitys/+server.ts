import type { RequestHandler } from "@sveltejs/kit";
import fs from 'fs';
import path from 'path';

export const GET: RequestHandler = async () => {
    const classAbilitys = path.resolve('static/default/classAbilitys.json');
    const speciesAbilitys = path.resolve('static/default/speciesAbilitys.json');


    try {
        const abilitys = {
            classAbilitys: JSON.parse(fs.readFileSync(classAbilitys, 'utf-8')) ,
            speciesAbilitys: JSON.parse(fs.readFileSync(speciesAbilitys, 'utf-8')) 
        }

        return new Response(JSON.stringify(abilitys), {
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
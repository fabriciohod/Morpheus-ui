export const load = async ({ fetch, url }) => {
    try {
        // Construct absolute URLs based on the current host
        const baseUrl = url.origin;

        const abilitysResponse = await fetch(`${baseUrl}/api/abilitys`);
        const weaponsResponse = await fetch(`${baseUrl}/api/weapons`);
        const itemsResponse = await fetch(`${baseUrl}/api/items`);
        const proficiencysResponse = await fetch(`${baseUrl}/api/proficiencys`);

        // Convert each response to JSON
        const abilitys = await abilitysResponse.json();
        const weapons = await weaponsResponse.json();
        const items = await itemsResponse.json();
        const proficiencys = await proficiencysResponse.json();

        // Return the fetched data to be used in the page
        return {
            defaults: { abilitys, weapons, items, proficiencys },
        };
    } catch (error) {
        console.log(error);
        return {
            data: [],
            error: 'Failed to load data'
        };
    }
};
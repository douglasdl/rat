import { supabase } from "../libs/supabaseClient";

export async function getBarbershops() {
    let { data: Barbershops, error } = await supabase
      .from('Barbershop')
      .select('*');

    if (error) {
        console.error('Error fetching barbershops:', error);
        return null; // or handle the error as needed
    }

    return Barbershops; // Return the fetched data
}

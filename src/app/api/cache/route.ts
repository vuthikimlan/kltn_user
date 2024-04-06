import { addCart } from '@/api/user';
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
   
    const data = await request
    console.log("request", data);

    return  Response.json({
        success: true,
        data
    })
    
}
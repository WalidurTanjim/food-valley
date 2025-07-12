import dbConnect from "@/lib/dbConnect";

export const GET = async() => {
    const result = await dbConnect(process.env.FOODS_COLLECTION).find().toArray();
    console.log(result);
    return Response.json(result);
}
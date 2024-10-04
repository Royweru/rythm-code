import { Course } from "@prisma/client"
import db from "@/lib/db"



export const GetCourses = async():Promise<Course[]|null> => {
     try {
         const res = await db.course.findMany({
            include:{
                lessons:true,
                assignments:true
            },
            orderBy:{
                createdAt:"desc"
            }
         })
         return res
     } catch (error) {
         console.error(error)
         return null
     }

    }

import * as z from 'zod'


export const AssignmentSchema = z.object({
    courseId:z.string().min(3,{message:"Course Id is required"}),
    description:z.string().min(4,{
        message:"Description is required"
    }),
    email:z.string().min(3),
    phone:z.string().min(3),
    images:z.object({
        url:z.string()
    }).array(),
    deadline:z.date(),
    answer:z.string().nullable().default("No answer right noe")
})
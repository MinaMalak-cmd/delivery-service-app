export const reformatDate = (date: string | undefined) => {
    return date ? date.split("-").reverse().join("-") : "--"
}
export function uniquify (arr) {
    if (!Array.isArray(arr))
        return ;

    return Array.from(new Set(arr))
}

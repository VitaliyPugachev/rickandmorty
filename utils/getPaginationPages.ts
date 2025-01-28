export function getPaginationPages (totalPages: number, page: number) {
    const SIDE_COUNT =  3
    const DOTS = '...'

    const fill = (start: number, length: number) =>
        Array.from(Array(length), (_, i) => start + i)

    /** Проверяем на корректность данных */
    if (totalPages <= 1 || page <= 0 || page > totalPages) return []

    /** Проверяем, есть ли смысл считать */
    if (totalPages <= SIDE_COUNT + 1) return fill(1, totalPages)

    /** Проверяем, в левом ли диапазоне текущая страница */
    const leftSide = page < SIDE_COUNT ? fill(1, SIDE_COUNT) : [1]

    /** Проверяем, в правом ли диапазоне текущая страница */
    const rightSide =
        page > totalPages - SIDE_COUNT + 1
            ? fill(totalPages - SIDE_COUNT + 1, SIDE_COUNT)
            : [totalPages]

    /** Рисуем центральную часть */
    let middle: (string | number)[] = [DOTS]

    if (page > SIDE_COUNT && totalPages - SIDE_COUNT + 1 > page) {
        middle = [DOTS, page - 1, page, page + 1, DOTS]
    }

    if (page === SIDE_COUNT && totalPages - SIDE_COUNT + 1 >= page) {
        middle = [ page - 1, page, page + 1, DOTS]
    }

    if (page > SIDE_COUNT && totalPages - SIDE_COUNT + 1 === page) {
        middle = [DOTS, page - 1, page, page + 1]
    }

    return [...leftSide, ...middle, ...rightSide];
}
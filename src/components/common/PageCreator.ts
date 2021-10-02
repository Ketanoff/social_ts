export function createPages (pages: Array<number>, pagesCount: number, currentPage: number) {
    if (pagesCount > 20) {
        if (currentPage > 5) {
            for (let i: number = currentPage - 4; i <= currentPage + 15; i++) {
                pages.push(i);
                if (i == pagesCount) break;
            }
        } else {
            for (let i = 1; i <= 30; i++) {
                pages.push(i);
                if (i == pagesCount) break;
            }
        }
    }
    // else {
    //     for (let i = 1; i <= pagesCount; i++) {
    //         pages.push(i);
    //     }
    // }
}
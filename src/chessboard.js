var chessBoard = function(size) {
    let hash = '';
    let space = ' ';

    for (let i = 0; i < size; i++) {
        hash += '\n';

        for (let j = 0; j < size; j++) {
            if ((i+j) % 2 == 0) {
                hash += space;
            }
            else {
                hash += '#';
            }
        }
    }
    console.log(hash);
}(8);

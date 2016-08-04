var count = 0;
function click(){
  if ( count%2 == 0 ){
    matrix.data = '0c1e3e7c3e1e0c00';
    matrix.on(matrix.data);
  } else {
	matrix.data = '0c12224422120c00';
    matrix.on(matrix.data);
  }
  count = count + 1;
}
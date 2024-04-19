// TODO: Code Refactoring - What does this function do? Can we rename this function better?
export function foobar(arr: number[]): number[] {
  let len = arr.length;
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  } while (swapped);

  return arr;
}

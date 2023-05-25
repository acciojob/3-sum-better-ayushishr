function threeSum(arr, target) {
    Arrays.sort(arr);
    let res = arr[0] + arr[1] + arr[2];
	for (let i = 0; i < arr.length - 2; i++) {
	let left = i + 1;
	let right = arr.length - 1;
	while (left < right) {
		let Closestsum = arr[i] + arr[left] + arr[right];
		if (Math.abs(Closestsum - target) < Math.abs(res - target)) {
			res = Closestsum;
		}
		if (Closestsum < target) {
			left++;
		} else if (Closestsum > target) {
			right--;
		} else {
			return res;
		}
	}
}
return res;
}
module.exports = threeSum;
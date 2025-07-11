// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
// Return any possible rearrangement of s or return "" if not possible.

// Constraints:
// 1 <= s.length <= 500
// s consists of lowercase English letters.

/**
 * Reorganizes the string s such that no two adjacent characters are the same.
 * If it's not possible to rearrange the string, returns an empty string.
 * * The function uses a max heap to prioritize characters with the highest frequency.
 * * It alternates between the two most frequent characters until all characters are placed.
 *
 * @param {string} s
 * @return {string}
 *
 * @example
 * Input: s = "aab"
 * Output: "aba"
 *
 * Input: s = "aaab"
 * Output: ""
 *
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */
export function reorganizeString(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const maxHeap = [];
  for (let char in freq) {
    maxHeap.push([char, freq[char]]);
  }

  maxHeap.sort((a, b) => b[1] - a[1]);

  const result = [];
  while (maxHeap.length > 1) {
    const [char1, freq1] = maxHeap.shift();
    const [char2, freq2] = maxHeap.shift();
    result.push(char1, char2);
    if (freq1 > 1) {
      maxHeap.push([char1, freq1 - 1]);
    }
    if (freq2 > 1) {
      maxHeap.push([char2, freq2 - 1]);
    }
  }

  if (maxHeap.length === 1) {
    const [char, freq] = maxHeap[0];
    if (freq > 1) {
      return "";
    }
    result.push(char);
  }

  return result.join("");
}

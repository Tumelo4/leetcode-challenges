class Solution:
    def isPalindrome(self, s: str) -> bool:
        s_lower = s.lower()
        s_lower = ''.join(c for c in s_lower if c.isalnum())

        # Two pointer index
        first_idx = 0
        second_idx = len(s_lower) - 1

        while first_idx < second_idx:
            if s_lower[first_idx] != s_lower[second_idx]:
                return False
            first_idx = first_idx + 1
            second_idx = second_idx - 1
        return True

obj = Solution()
print(obj.isPalindrome("0P"))

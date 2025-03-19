from typing import List
class Solution:
    def sieveOfEratosthenes(self, n: int) -> List[int]:
        prime = [True] * (n+1)
        p = 2

        while p * p <= n:
            if prime[p]:
                for i in range(p * p, n + 1, p):
                    prime[i] = False
            p += 1
        return [p for p in range(2, n+1) if prime[p]]
obj = Solution()
print(obj.sieveOfEratosthenes(30))
import pytest
from code_challenges.example import sum


def test_one():
    actual = sum(1,1)
    expected = 2
    assert actual == expected
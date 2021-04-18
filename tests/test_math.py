from lib.math import add, minus


def test_add():
    assert add(12, 1) == 13


def test_minus():
    assert minus(4, 1) == 3

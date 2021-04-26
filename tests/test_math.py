from lib.math import add, minus, MyContext


def test_add():
    with open("README.md") as f:
        # f.do_something("data")
        assert False
    assert add(12, 1) == 13


def test_minus():
    assert minus(4, 1) == 3
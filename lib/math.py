def add(a, b):
    return a + b


def minus(a, b):
    return a - b


class MyContext:
    def __init__(self):
        # example file or database connection
        self.big_resource = "Some big resource"

    def __enter__(self):
        print("Starting context: ", self)
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting context: ", self, exc_type, exc_value, traceback)
        # simulate cleaning up big_resource
        raise exc_type
        self.big_resource = None

        # suppress errors
        return True

    def do_something(self, data):
        # simulate doing something with big_resource
        print("Doing something with data: ", self, data)

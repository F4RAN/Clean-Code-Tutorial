class ID:
    _counter = 0

    def __init__(self):
        ID._counter += 1
        self.id = ID._counter

    
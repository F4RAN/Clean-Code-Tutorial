
class Age:
    def __init__(self, value):
        if not isinstance(value, int):
            raise ValueError("Age must be integer")
        if value < 0 or value > 120:
            raise ValueError("Age must be between 0 to 120")
        
        self._value = value
    
        
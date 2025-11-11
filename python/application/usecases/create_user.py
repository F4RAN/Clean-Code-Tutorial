from python.application.ports.user_repository import UserRepository
from python.domain.entities.user import User
from python.domain.value_objects.id import ID


class CreateUser:
    def __init__(self, user_repo: UserRepository) -> None:
        self.user_repo = user_repo
    
    async def execute(self, id, phone_number, role, age, sex):
        user = User(uid=ID(), phone_number=phone_number, role=role, age=age, sex=sex)
        await self.user_repo.save(user)
        return user
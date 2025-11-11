from python.application.ports.user_repository import UserRepository
from python.domain.value_objects.id import ID

class MongoUserRepository(UserRepository):
    def __init__(self, db) -> None:
        super().__init__()
        self.collection = db["users"]
    
    async def save(self, user):
        await self.collection.insert_one({
            "id": user.id.value,
            "phone_number": user.phone_number._value,
            "age": user.age._value,
            "sex": user.sex._value_,
            "role": user.role._value_
        })

    async def find_by_id(self, id: ID):
        return await self.collection.find_one({"id": id.value})


        
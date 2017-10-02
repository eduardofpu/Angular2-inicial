"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Fulano de tal', email: 'fulano@email.com', telefone: "(00)0000-0000" },
            { id: 2, nome: 'ciclano', email: 'ciclano@email.com', telefone: "(00)0000-0000" },
        ];
        return { contatos };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
from abc import ABC, abstractmethod
import json
from csv import DictWriter


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    @abstractmethod
    def get_length(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)

    def get_length(self):
        return 5


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open("meu_relatorio.csv", "w") as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)

    def get_length(self):
        return 5


meu_relatorio_json = SalesReportJSON('meu_relatorio')
meu_relatorio_csv = SalesReportCSV('meu_relatorio')

meu_relatorio_json.serialize()
meu_relatorio_csv.serialize()
print(meu_relatorio_json.get_length())

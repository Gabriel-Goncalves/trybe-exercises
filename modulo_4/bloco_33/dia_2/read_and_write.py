test_file = open("my_first_file.txt", mode="w")

test_file.write("Gabriel Gonçalves\n")
test_file.write("Pedro Marques")

test_file.close()


my_file = open("my_first_file.txt", mode="r")
content = my_file.read()
print(content)
my_file.close()

file = open("arquivo.dat", mode="wb")
file.write(b"C\xc3\xa1ssio 30")
# o prefixo b em uma string indica que seu valor está codificado em bytes
file.close()

# leitura
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo

from collections import namedtuple

a = [1, 2, 3, 4, 5, 6]

b = a.__iter__()
print(b)
print(b.__next__())
print(b.__next__())
print(b.__next__())
print(b.__next__())
print(b.__next__())
print(b.__next__())
print(b)

GeoPoint = namedtuple("GeoPoint", "lat lon")
location = GeoPoint(-22.81711234090266, -47.069559317039655)
print(location.lon)  # muito melhor do que location[0]

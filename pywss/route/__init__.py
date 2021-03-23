# coding: utf-8
import re
import loggus


class _RouteMap:

    def __init__(self):
        self.__staticRouteMap = {}
        self.__dynamicRouteList = []

    def register(self, route, *handlers):
        if "(?P<" in route:
            regex = re.sub("(\?P<.*?>)\)", "\\1[^/?]*?)", route) + "/?$"
            prefix = re.search("(.*?)\(\?P", route).group(1)
            length = route.count("/")
            self.__dynamicRouteList.append((prefix, length, re.compile(regex).match, handlers))
        else:
            self.__staticRouteMap[route] = handlers

    def search(self, route):
        inPath = f"{route.strip('/')}"
        if inPath in self.__staticRouteMap:
            return {}, self.__staticRouteMap[inPath], None
        inLength = inPath.count("/")
        for index in range(len(self.__dynamicRouteList)):
            prefix, length, match, handlers = self.__dynamicRouteList[index]
            if length == inLength and inPath.startswith(prefix):
                pathMatch = match(inPath)
                if pathMatch:
                    return pathMatch.groupdict(), handlers, None
        return None, None, "404 by pywss"


RouteMap = _RouteMap()


class Route:

    def __init__(self, route=""):
        self.route = f"/{route.strip().strip('/')}" if route else route
        self.handlers = []
        self.log = loggus.withFields({"module": "Route", "route": route})

    def Use(self, *handlers):
        self.handlers += list(handlers)

    def Party(self, route, *handlers):
        if not route:
            self.Use(*handlers)
            return self
        route = Route(f"{self.route}/{route.strip().strip('/')}")
        handlers = self.handlers + list(handlers)
        route.Use(*handlers)
        return route

    def __register(self, method, route, *handlers):
        if not handlers:
            return
        if not route:
            self.log.warning(f"undefined route")
            return
        route = route.strip().strip("/")
        route = f"{method}{self.route}/{route}"
        handlers = self.handlers + list(handlers)
        RouteMap.register(route, *handlers)

    def Get(self, route, *handlers):
        self.__register("GET", route, *handlers)

    def Head(self, route, *handlers):
        self.__register("HEAD", route, *handlers)

    def Post(self, route, *handlers):
        self.__register("POST", route, *handlers)

    def Put(self, route, *handlers):
        self.__register("PUT", route, *handlers)

    def Delete(self, route, *handlers):
        self.__register("DELETE", route, *handlers)

    def Options(self, route, *handlers):
        self.__register("OPTIONS", route, *handlers)

    def Patch(self, route, *handlers):
        self.__register("PATCH", route, *handlers)

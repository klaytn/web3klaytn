from setuptools import setup, find_packages  # noqa: H301

NAME = "web3py_ext"
VERSION = "1.0.0"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = [
    "web3 ~= 6.3.0"
]

setup(
    name=NAME,
    version=VERSION,
    description="KLAYTN OPEN API",
    author="API support",
    author_email="",
    url="",
    keywords=[],
    python_requires=">=3.7",
    install_requires=REQUIRES,
    packages=["web3py_ext"],
    include_package_data=True,
    license="ISC",
)

from base.testing import KlaytnBaseTesting
from unittest import skip

class TestEtherbase(KlaytnBaseTesting):
    @skip
    def test_post(self):
        self.response = self.w3.eth.etherbase
        self.assertIsInstance(self.response, str)

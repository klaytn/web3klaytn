from base.testing import KlaytnBaseTesting


class TestKlayRecoverFromMessage(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = '0xA2a8854b1802D8Cd5De631E690817c253d6a9153'
        self.message = '0xdeadbeef'
        self.signature = '0x1e6338d6e4a8d688a25de78cf2a92efec9a92e52eb8425acaaee8c3957e68cdb3f91bdc483f0ed05a0da26eca3be4c566d087d90dc2ca293be23b2a9de0bcafc1c'
        self.blockNumber = 'latest'

    def test_post(self):
        self.response = self.w3.klay.recover_from_message(
            self.address, self.message, self.signature, self.blockNumber
        )
        self.assertRegex(self.response, r'^0x.*$')

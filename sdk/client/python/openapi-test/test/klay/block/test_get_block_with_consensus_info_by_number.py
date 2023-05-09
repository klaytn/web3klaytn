from base.testing import KlaytnBaseTesting


class TestKlayGetBlockWithConsensusInfoByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x6e0431"

    def test_post(self):
        self.response = self.sdk.klay.get_block_with_consensus_info_by_number(
            self.blockTag
        )
        self.assertResponseSuccess()

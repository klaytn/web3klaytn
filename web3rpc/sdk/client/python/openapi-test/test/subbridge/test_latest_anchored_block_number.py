from base.testing import KlaytnBaseTesting


class Test (KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
       

    def test_post(self):
        self.response = self.w3.subbridge.latest_anchored_block_number(
        )

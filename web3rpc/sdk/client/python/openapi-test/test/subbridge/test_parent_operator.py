from base.testing import KlaytnBaseTesting


class TestParentOperator (KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
       

    def test_post(self):
        self.response = self.w3.subbridge.parent_operator(
        )
